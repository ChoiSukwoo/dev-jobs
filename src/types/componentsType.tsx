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
    fontWeight:number;
    fontSize: number;
    color: string;
    backgroundColor: string;
    hoverColor: string;
    hoverBackgroundColor: string;
    children: string | JSX.Element;
    onClick?: () => void;
}

//잡 디테일 헤더파일
export type JobHeaderType = {
    logo:string,
    logoBackground:string,
    company:string,
}

//json 데이터

export type DataType = {
    "id": number,
    "company": string,
    "logo": string,
    "logoBackground": string,
    "position": string,
    "postedAt": string,
    "contract": string,
    "location": string,
    "website": string,
    "apply": string,
    "description": string,
    "requirements": {
      "content": string,
      "items": string[]
    },
    "role": {
      "content": string,
      "items": string[]
    }
}

//리스트 아이템 
export type listItemType = {
    fontSize: string,
    lineHeight:string,
    fontWeight:number,
    color: string,
    bulletSize:string,
    bulletWeight:number,
    bulletWidth: string,
    bulletColor:string
}

