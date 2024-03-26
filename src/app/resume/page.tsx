import resumeData from "../../data/resume.json";

export const metadata = {
  title: "Resume",
};

const Page = () => {
  return (
    <main>
      <div className="bg-white text-black max-w-[830px] mx-auto text-[0.9rem] rounded-md print:rounded-none py-8 px-6 sm:py-12 sm:px-8  xl:py-8 xl:px-20 print:p-0 overflow-hidden my-8 shadow print:shadow-none">
        <div className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]">
          <div className="py-4">
            <h1 className="text-black text-3xl">{resumeData.basics.name}</h1>
            <div className="leading-[1] pt-8 print:text-black">
              {resumeData.basics.label}
            </div>
          </div>
        </div>

        <div className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]">
          <div className="font-semibold border-b-2 border-b-black leading-[2rem] mb-[calc(1rem-2px)] print:leading-[2rem]">
            Links
          </div>
          <div>
            <div className="inline-block w-[100px] font-semibold">Website</div>
            {resumeData.basics.website}
          </div>
          <div>
            <div className="inline-block w-[100px] font-semibold">
              Portfolio
            </div>
            {resumeData.basics.portfolio}
          </div>
        </div>

        <div className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]">
          <div className="font-semibold border-b-2 border-b-black leading-[2rem] mb-[calc(1rem-2px)] print:leading-[2rem]">
            Experience
          </div>
          {resumeData.work.map((job, i) => (
            <div
              key={i}
              className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]"
            >
              <div className="font-semibold text-black leading-[inherit] print:pt-4 print:font-normal">
                {job.company}
              </div>
              <div className="flex items-center flex-wrap gap-4">
                <div className="font-mono text-[0.7rem] tracking-[0.5px] uppercase leading-[2rem] text-black/80 font-bold">
                  {job.position}
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.5px]  uppercase leading-[2rem] text-black/50">
                  {" "}
                  {job.startDate} - {job.endDate}
                </div>
              </div>
              <div className="leading-[inherit]">{job.summary}</div>
            </div>
          ))}
        </div>

        <div className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]">
          <div className="font-semibold border-b-2 border-b-black leading-[2rem] mb-[calc(1rem-2px)] print:leading-[2rem]">
            Education
          </div>
          {resumeData.education.map((school) => (
            <div className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]">
              <div className="font-semibold text-black leading-[inherit] print:pt-4 print:font-normal">
                {school.institution}
              </div>
              <div className="leading-[1] pt-[0.4rem] print:text-black">
                {school.area}
              </div>
              <div className="font-mono text-[0.7rem] tracking-[0.5px]  uppercase leading-[2rem] text-black/50">
                {" "}
                {school.startDate} - {school.endDate}
              </div>
              <div className="leading-[inherit]">{school.studyType}</div>
            </div>
          ))}
        </div>

        <div
          className="py-4 leading-[1.5] print:text-[0.8rem] print:pt-[0.2rem] print:pb-[0.5rem]"
          style={{ textAlign: "center", fontSize: "0.7rem" }}
        >
          <div className="leading-[inherit]">
            {resumeData.basics.website} • {resumeData.basics.phone} • 
            {resumeData.basics.email} • 
            {resumeData.basics.location.city}
            {", "}
            {resumeData.basics.location.region}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
