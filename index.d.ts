interface optionType{
    name?: string
    dir?: string
}

type ValueData = string | object | number | null | boolean | bigint | symbol | any[];

export class corex {
    public constructor(ops?: optionType);

    public fetch(key: string): any;
    public get(key: string): any;
    public set(key: string, value: ValueData): any;
    public has(key: string): boolean;
    public all(): { ID: string; data: any; }[];
    public del(key: string): boolean;
}