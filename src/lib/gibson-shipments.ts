import raw from '../data/gibson-shipments.json';

export interface ShipmentRecord {
  model: string; year: number; finish: string; variant: string; count: number;
  status: string; sources: string[]; sourceLabel: string; note?: string;
  alternatives?: { count: number; source: string }[];
}
export interface ShipmentModel { id: string; name: string; family: string; note: string; finishHints: string[] }
export const shipmentData = raw as { updated: string; coverage: { from: number; to: number }; models: ShipmentModel[]; records: ShipmentRecord[]; sources: { id: string; title: string; url: string; type: string; checked: string }[] };
export const formatCount = (count: number) => count.toLocaleString('en-US');
export function lookupShipments(modelId: string, finish = 'all', year = 'all', variant = 'all') {
  const model = shipmentData.models.find(item => item.id === modelId);
  const context = shipmentData.records.filter(row => row.model === modelId && (year === 'all' || row.year === Number(year)) && (variant === 'all' || row.variant === variant));
  const rows = context.filter(row => finish === 'all' || row.finish === finish);
  const disputed = rows.filter(row => row.status === 'disputed');
  const count = rows.length && !disputed.length ? rows.reduce((sum, row) => sum + row.count, 0) : null;
  const years = [...new Set(rows.map(row => row.year))].sort((a, b) => a - b);
  const gaps = years.length ? Array.from({ length: years.at(-1)! - years[0] + 1 }, (_, i) => years[0] + i).filter(value => !years.includes(value)) : [];
  const unseparated = !rows.length && finish !== 'all' && context.some(row => row.finish === 'Not separated' || row.finish === 'Unspecified finish');
  const status = disputed.length ? 'Sources disagree' : rows.length ? 'Recorded shipments' : unseparated ? 'Finish not separated' : 'No checked count';
  return { model, rows, context, count, years, gaps, disputed, status, unseparated };
}

export function shipmentCSV(rows: ShipmentRecord[]) {
  const cell = (value: unknown) => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const header = ['Model','Year','Finish category','Variant','Reported shipments','Status','Source row','Sources','Notes'];
  return [header, ...rows.map(row => [shipmentData.models.find(model => model.id === row.model)?.name,row.year,row.finish,row.variant,row.status === 'disputed' ? '' : row.count,row.status,row.sourceLabel,row.sources.map(id => shipmentData.sources.find(source => source.id === id)?.url).join(' | '),[row.note,row.alternatives?.map(value => `${value.count} (${value.source})`).join('; ')].filter(Boolean).join(' ')])].map(row => row.map(cell).join(',')).join('\r\n');
}
