import { NextPage } from "next";

import { HeroHeader } from "../components/HeroHeader";
import { Layout } from "../components/Layout";
import { CardList } from "../components/section/CardList";
import { ChronologyList } from "../components/section/ChronologyList";
import { Section } from "../components/section/Section";
import {
  activities,
  certificates,
  developments,
  employments,
  presentations,
} from "../const/about";

const IndexPage: NextPage = () => (
  <Layout>
    <div className="my-20">
      <HeroHeader />
    </div>

    <main className="grid grid-cols-1 gap-28 mb-24">
      <Section title="Employments">
        <ChronologyList chronologyList={employments} />
      </Section>

      <Section title="Activities">
        <ChronologyList
          chronologyList={activities.map((e) => ({ dateFrom: e.date, ...e }))}
        />
      </Section>

      <Section title="Certificates">
        <ChronologyList
          chronologyList={certificates.map((e) => ({ dateFrom: e.date, ...e }))}
        />
      </Section>

      <Section title="Development">
        <CardList cardList={developments} />
      </Section>

      <Section title="Presentation">
        <CardList cardList={presentations} />
      </Section>
    </main>
  </Layout>
);

export default IndexPage;
