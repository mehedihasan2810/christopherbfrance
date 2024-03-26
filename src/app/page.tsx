import { PostCard } from "@/components/post-card";
import { getAllPortfolios } from "@/lib/api";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Page() {
  const allPortfolios = getAllPortfolios();

  return (
    <main>
      <section className="py-[10vh]">
        <div className="p-4 max-w-2xl mx-auto text-[1.2rem]">
          <h1 className="text-[2em] sm:text-[2.8em] leading-[1.3]">
            Let's use computers to address important social problems with
            urgency, clarity and <em>creativity</em>.
          </h1>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="p-4 max-w-2xl mx-auto text-[1.2rem]">
          <div className="flex items-center overflow-hidden mb-12 leading-[1.2] mt-[-5vh]">
            <Image
              className="mr-4 size-[180px] sm:size-[200px] rounded-md"
              src="/assets/christopher.jpg"
              alt="Photo of Christoper Blow France"
              width={200}
              height={200}
              priority
            />
            <div className="flex flex-col h-full">
              <h1 className="text-[1.5rem] sm:text-[2rem] font-bold sm:font-light">
                Chris Blow France
              </h1>
              <p className="text-[1.1em] tracking-[1px] font-sans">
                Design and strategy
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 max-w-2xl mx-auto text-[1.2rem]">
          <div className="font-sans font-normal leading-[2] text-[1.5rem] pb-16">
            <p>
              I design and build data products to improve human sensemaking. My
              focus is conceptualization, positioning and prototyping products
              using applied machine learning, data visualization and large
              datasets.
            </p>
            <div className="text-[1.1rem] font-semibold uppercase relative mt-24 mb-8">
              Big questions
            </div>
            <div className="space-y-6">
              <p>
                How can we expand human capacity to better cope with critical
                social and environmental problems?
              </p>
              <p></p>
              <p>
                How can we visualize data to make better decisions within it and
                recognize opportunity?
              </p>
              <p>
                How can we manage complexity with ethical responsibility to make
                powerful digital systems inclusive and accountable?
              </p>
            </div>

            <div className="text-[1.1rem] font-semibold uppercase relative mt-[6rem] mb-[2rem]">
              Working together
            </div>

            <ul className="space-y-6 font-light">
              <li className="flex items-center gap-2">
                <ArrowRightIcon className="size-7" />I work with scientists,
                startups and nonprofits.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRightIcon className="size-7" />I design and build native,
                cross-platform apps.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRightIcon className="size-7" />I help build business
                models in complex domains. apps.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="p-4 max-w-2xl mx-auto text-[1.2rem]">
          <div>
            <div className="text-lg font-semibold uppercase mt-24 mb-16">
              Experience
            </div>
            <div className="font-normal text-base mb-10 uppercase">
              Product leadership and platform design
            </div>
            <ul className="space-y-7 font-light">
              <li>
                <em>Meedan</em> — Founder and design lead for translation
                startup
              </li>
              <li>
                <em>The Data Guild</em> —  Lead Member at data product studio
              </li>
              <li>
                <em>LightField</em> — Design for agriculture and climate
              </li>
            </ul>
            <div className="text-base uppercase mt-24 mb-12">
              Software development
            </div>
            <ul className="space-y-7 font-light">
              <li>
                <em>WeaveGrid</em> — Frontend/UX lead for climate tech startup
              </li>
              <li>
                <em>Contain</em> — Technology lead for fintech agriculture
                startup
              </li>
              <li>
                <em>Cypress</em> — Design and code for automation platform
              </li>
            </ul>
            <div className="text-base uppercase mt-24 mb-12">
              {" "}
              Usability, graphics, UI, visualizations
            </div>
            <ul className="space-y-7 font-light">
              <li>
                <em>Litterati</em> — Design consultant for data prep and
                computer vision.
              </li>
              <li>
                <em>Healthmade</em> — Data visualizations for health
              </li>
              <li>
                <em>Ethnio</em> — UI development for usability research products
              </li>
              <li>
                <em>Bolt | Peters</em> — Design and UI research consulting
              </li>
              <li>
                <em>Ushahidi</em> — Design for civic media platform
              </li>
              <li>
                <em>Nonprofit Design</em> — Founder of design services company
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="m-8 max-w-[1200px] sm:w-[90%] sm:mx-auto "></div>
      </section>
      {/* <Container> */}
      <section>
        {/* <Intro /> */}
        {/* <PostCard
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        <div className="max-w-[1200px] m-8 2md:w-[90%] 2md:mx-auto 2md:flex 2md:flex-wrap 2md:justify-between 2md:[&>a]:w-[35%] 2md:[&>a]:m-4 2md:[&>a:nth-child(1)]:w-[50%] 2md:[&>a:nth-child(4)]:w-[50%] 2md:[&>a:nth-child(5)]:w-[50%]">
          {allPortfolios.map((portfolio, index) => (
            <PostCard
              // key={heroPost.slug}
              key={index}
              title={portfolio.title}
              cover={portfolio.cover}
              // date={heroPost.date}
              // author={heroPost.author}
              slug={portfolio.slug}
              excerpt={portfolio.excerpt}
            />
          ))}
        </div>
      </section>

      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      {/* </Container> */}
    </main>
  );
}
