import React from 'react';

import Layout from '../layouts/page-layout';
import AltHero from '../components/altHero';
import Pillars from '../components/pillars';
import ListComponent from '../components/listComponent';

const content = {
    hero: {
        body: `No one has a monopoly on solutions to complex global challenges. At Silverado, we believe that fundamental disagreement over questions of American policy is not only an inevitable byproduct of our democratic process; it is in fact an absolutely indispensable part of that process. Through a series of roundtable discussions leading up to our inaugural Ideas Competition, we're bringing together policy experts and stakeholders from different disciplines, industries, and political vantage-points to challenge entrenched ideas about American leadership and build consensus around new paths toward American prosperity and global competitiveness in the 21c.`,
        heading: 'From Ideas to Implementation',
    },
    listContent: {
        heading: 'What are the characteristics of a Silverado Idea?',
        body:
            "Have a creative policy idea that you're dying to share? Don't wait until the Ideas Competition! Send us a link to your paper, article, report, or study at info@silverado.org, or Tweet us @SilveradoPolicy, and we'll share it here.",
        listItems: [
            {
                heading: 'Diagnostic',
                text:
                    'Does it identify a discrete policy challenge or failure?',
            },
            {
                heading: 'Solution-oriented',
                text: 'Does it offer a focused solution to that problem?',
            },
            {
                heading: 'Inventive',
                text:
                    'Does it present a creative or unconventional approach to a policy challenge?',
            },
            {
                heading: 'Actionable',
                text: 'Does it include a clear path towards implementation?',
            },
            {
                heading: 'Bipartisan',
                text: 'Can it draw support from across the political spectrum?',
            },
            {
                heading: 'Empirical',
                text: 'Can its influence be observed and measured?',
            },
            {
                heading: 'Integrative',
                text:
                    'Does it intersect with more than one of Silverado’s three focus areas?',
            },
            {
                heading: 'Scalable',
                text:
                    'Can its scope be broadened to address related policy challenges?',
            },
        ],
    },
};

export default function IdeasPage() {
    return (
        <Layout>
            <AltHero body={content.hero.body} heading={content.hero.heading} />
            <ListComponent
                hasTopGradient
                heading={content.listContent.heading}
                body={content.listContent.body}
                listItems={content.listContent.listItems}
            />
            <Pillars />
        </Layout>
    );
}
