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