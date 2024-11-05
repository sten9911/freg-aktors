export interface FunctionsList {
    functions: Function[];
}
export interface Function {
    id: number;
    title: string;
    owner: string; 
    description: string; 
    likes: number;
    liked: boolean;
}

export interface FunctionDetails {
    longDescription: string;
    technicalData: [{category: string, service: string, technology: string, programmingLanguage: string, operationSystem: string}, {securityStandard: string, securityClass: string, availabilityLevel: string, integrityLevel: string, confidentialityLevel: string, lastAudit: Date}];
    importantLinks: {links: {title: string, url: string}[], contacts: {name: string, email: string, phoneNr?: string}[]};
    faq: {question: string, answer: string}[];
    useCaseData: {img: string, name: string, projectName: string, startedUsing: Date, usedBy: string}[];
    tags: string[];
}