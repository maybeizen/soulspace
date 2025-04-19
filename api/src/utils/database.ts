import mongoose, { ConnectOptions } from "mongoose";

type MongoURI = string;

interface TimedMongoose extends mongoose.Mongoose {
  connectionTime?: number;
}

class Database {
  private uri: MongoURI;
  private options: ConnectOptions;
  private connection: TimedMongoose | null = null;
  private startTime: number = 0;

  constructor(uri: MongoURI, options: ConnectOptions = {}) {
    this.uri = uri;
    this.options = options;
  }

  public async connect(): Promise<TimedMongoose> {
    this.startTime = Date.now();
    const connection = await mongoose.connect(this.uri, this.options);
    const connectionTime = Date.now() - this.startTime;

    const timedConnection = connection as TimedMongoose;
    timedConnection.connectionTime = connectionTime;

    this.connection = timedConnection;
    console.log(`MongoDB connected in ${connectionTime}ms`);

    return timedConnection;
  }

  public get connectionTime(): number | null {
    return this.connection?.connectionTime ?? null;
  }

  public async destroy(): Promise<void> {
    if (this.connection) {
      await mongoose.disconnect();
      console.log("MongoDB disconnected.");
      this.connection = null;
    }
  }

  public getConnection(): TimedMongoose | null {
    return this.connection;
  }
}

export { Database };
export type { MongoURI, TimedMongoose };
