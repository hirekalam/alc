import { JobCard } from "./job-card"

const jobs = [
  {
    id: "1",
    role: "Mechanical Engineer",
    location: "Dubai, UAE",
    salary: "AED 9,000 – 12,000",
    details: "3+ years experience. Knowledge of HVAC systems preferred. Immediate joining.",
  },
  {
    id: "2",
    role: "Registered Nurse",
    location: "Doha, Qatar",
    salary: "QAR 8,000 – 10,000",
    details: "Valid license. ICU experience a plus. Accommodation provided.",
  },
  {
    id: "3",
    role: "Electrical Technician",
    location: "Riyadh, Saudi Arabia",
    salary: "SAR 4,500 – 6,000",
    details: "Maintenance & troubleshooting. Shift work. Overtime available.",
  },
  {
    id: "4",
    role: "HSE Officer",
    location: "Muscat, Oman",
    salary: "OMR 600 – 800",
    details: "NEBOSH certification required. Oil & Gas preferred.",
  },
  {
    id: "5",
    role: "Chef de Partie",
    location: "Kuwait City, Kuwait",
    salary: "KWD 350 – 450",
    details: "Hotel experience. Multicuisine exposure is advantageous.",
  },
  {
    id: "6",
    role: "Construction Supervisor",
    location: "Manama, Bahrain",
    salary: "BHD 450 – 600",
    details: "Site supervision. Experience with high-rise projects preferred.",
  },
]

export function JobGrid() {
  return (
    <section aria-labelledby="jobs-heading" className="mx-auto max-w-6xl px-4 py-10">
      <h2 id="jobs-heading" className="text-xl font-semibold text-[#162338] text-balance">
        Latest Job Openings
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}
