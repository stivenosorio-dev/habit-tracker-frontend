function MetricCard({ label, value, detail }) {
  return (
    <article className="rounded-2xl bg-surface p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm text-ink-600">{label}</p>
      <p className="mt-1 text-3xl font-bold text-ink-900">{value}</p>
      {detail && <p className="mt-1 text-sm text-ink-600">{detail}</p>}
    </article>
  )
}

export default MetricCard