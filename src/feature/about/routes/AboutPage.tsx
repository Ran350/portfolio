import { FC } from "react";

import { Layout } from "@/components/Layout";

import { CardList } from "../components/CardList";
import { ChronologyList } from "../components/ChronologyList";
import { HeroHeader } from "../components/HeroHeader";
import { PersonJsonLd } from "../components/PersonJsonLd";
import { Section } from "../components/Section";
import { SnsList } from "../components/SnsList";
import {
  activities,
  certificates,
  developments,
  employments,
} from "../store/about";

export const AboutPage: FC = () => (
  <Layout>
    <PersonJsonLd />
    <h1 className="sr-only">Ran350 Portfolio</h1>

    <div className="my-12">
      <div className="mx-auto mb-8">
        <HeroHeader />
      </div>
      <SnsList />
    </div>

    <div className="grid grid-cols-1 md:gap-24 gap-12 mb-24">
      <Section title="Employments">
        <ChronologyList chronologyList={employments} />
      </Section>

      <Section title="Certificates">
        <ChronologyList
          chronologyList={certificates.map((e) => ({ dateFrom: e.date, ...e }))}
        />
      </Section>

      <Section title="Activities">
        <ChronologyList
          chronologyList={activities.map((e) => ({ dateFrom: e.date, ...e }))}
        />
      </Section>

      <Section title="Development">
        <CardList cardList={developments} />
      </Section>
    </div>
  </Layout>
);
