import { LogoProps } from '../types/index';

export default function Logo(props: LogoProps) {
    return <i className={`fas fa-meteor ${props.className}`}></i>;
}
