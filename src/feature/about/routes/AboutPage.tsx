import { FC } from "react";

import { Layout } from "@/components/Layout";

import { CardList } from "../components/CardList";
import { ChronologyList } from "../components/ChronologyList";
import { HeroHeader } from "../components/HeroHeader";
import { Section } from "../components/Section";
import {
  activities,
  certificates,
  developments,
  employments,
} from "../store/about";

export const AboutPage: FC = () => (
  <Layout>
    <div className="lg:my-20 my-12">
      <HeroHeader />
    </div>

    <main className="grid grid-cols-1 md:gap-24 gap-12 mb-24">
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
    </main>
  </Layout>
);
