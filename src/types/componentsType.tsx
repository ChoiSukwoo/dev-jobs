// 테마
export type ThemeType = {
    theme: ThemeValue;
    changeTheme: () => void;
}

export type ThemeValue = "Dark" | "Light" 

//디바이스
export type DeviceType = {
    device:DeviceValue
}

export type DeviceValue = "Web" | "Mobile" | "Tablet" 

const size = {
    mobile: '767px',
    tablet: '1023px'
}
  
export const SizeTheme = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
}

//job카드
export type CardType = {
    company:string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
}

//버튼타입
export type BtnType = {
    width: string;
    height: string;
    borderRadius: number;
    fontSize: number;
    color: string;
    backgroundColor: string;
    hoverColor: string;
    hoverBackgroundColor: string;
    children: string | JSX.Element;
    onClick?: () => void;
}