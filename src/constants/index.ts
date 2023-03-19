export const LIMIT = 10;

export const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
export const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
export const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
export const token = [header, body, signature].join('.')
