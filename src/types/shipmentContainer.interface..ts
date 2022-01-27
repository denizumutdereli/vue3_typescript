export interface TopLevel {
    queryInfo: QueryInfo[];
    results:   Result[];
}

export interface QueryInfo {
    resultCounts: number;
}

export interface Result {
    _object:          string;
    id:               number;
    container_type:   string;
    container_number: string;
    container_size:   string;
    seal_number:      string;
    shipment_id:      number;
    info_link : string;
}
 