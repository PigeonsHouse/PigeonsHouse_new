export type Work = {
    name: string;
    thumbnail: string;
    description: string;
    genre: string;
    url?: string;
    download_url?: string;
    source_url?: string;
    created_at: string;
}

export type Works = Array<Work>
