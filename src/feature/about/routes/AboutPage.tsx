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
    </main>
  </Layout>
);
