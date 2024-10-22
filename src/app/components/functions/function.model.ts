import {model} from '@angular/core';

export interface FunctionsList {
    functions: Function[];
}
export interface Function {
    title: string;
    owner: string; 
    description: string; 
    likes: number;
}