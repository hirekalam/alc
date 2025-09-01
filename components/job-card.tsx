type Job = {
  id: string
  role: string
  location: string
  salary: string
  details: string
}

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-lg border border-[#E5E7EB] bg-white p-5 flex flex-col">
      <header className="mb-3">
        <h3 className="text-lg font-semibold text-[#162338]">{job.role}</h3>
        <p className="text-sm text-[#191919]/70">{job.location}</p>
      </header>
      <p className="text-sm text-[#191919]/80 leading-relaxed">{job.details}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[#191919]">Salary: {job.salary}</span>
        <a
          href={`/contact?subject=${encodeURIComponent("Applying for " + job.role)}`}
          className="inline-flex items-center rounded-md bg-[#F8F30E] px-3 py-2 text-xs font-medium text-[#191919] hover:opacity-90"
          aria-label={`Apply for ${job.role}`}
        >
          Apply
        </a>
      </div>
    </article>
  )
}
