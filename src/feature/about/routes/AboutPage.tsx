import { Layout } from "@/components/Layout";
import { HeroHeader } from "@/feature/about/components/HeroHeader";
import {
  activities,
  certificates,
  developments,
  employments,
} from "@/feature/about/store/about";
import { FC } from "react";
import { CardList } from "../components/CardList";
import { ChronologyList } from "../components/ChronologyList";
import { Section } from "../components/Section";

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
