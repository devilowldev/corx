export interface OptionType{
    name?: string
    dir?: string
}

export interface DataSet<V>{
    ID: string;
    data: V
}

export interface Params{
    id?: any;
    stringify?: boolean;
    data?: any;
}

export class corx<V> {
    
    ops: OptionType;
    
    public constructor(ops: OptionType);

    public fetch(key: string): V;
    public get(key: string): V;
    public set(key: string, value: V): void;
    public has(key: string): boolean;
    public all(): Dataset<V>[];
    public del(key: string): boolean;
    public delete(key: string): boolean;
    public core(module: 'fetch' | 'get' | 'set' | 'has' | 'all' | 'del', params: Params, name: string): any;
    
}
