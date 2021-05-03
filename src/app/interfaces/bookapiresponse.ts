
export interface BookAPIResponse {
    items: items;
}

export interface items {
    volumeInfo: volumeInfo;
}

export interface volumeInfo {
    title:string;
    authors:string;
    link:string;
    Error:string;
}