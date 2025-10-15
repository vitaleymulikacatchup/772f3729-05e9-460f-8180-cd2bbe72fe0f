"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero", url: "https://images.pexels.com/photos/7414112/pexels-photo-7414112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two men assist a seated colleague with a virtual reality headset in a stylish, brick-walled office." },
  { id: "feature1", url: "https://images.pexels.com/photos/8294605/pexels-photo-8294605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "White robot toy casting a shadow in a dark studio setting, highlighting artificial intelligence." },
  { id: "member1", url: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint." },
  { id: "faqImage", url: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Diverse team collaborating in a modern office setting with laptops and presentation screen." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Peak" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Unleash the Power of AI with Peak"
            description="Transform your workflow with cutting-edge AI technology."
            imageSrc={assetMap.find(a => a.id === "hero")?.url}
            buttons={[
              { text: "Get Started", href: "#contact" },
              { text: "Learn More", href: "#about" }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovative Solutions", description: "Custom-tailored AI solutions for your business.", icon: Lightbulb },
              { title: "Data-Driven Insights", description: "Harness data like never before.", icon: GraphUp }
            ]}
            imageSrc={assetMap.find(a => a.id === "feature1")?.url}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Advanced Algorithms", description: "Powered by state-of-the-art algorithms for superior performance.", imageSrc: assetMap.find(a => a.id === "feature1")?.url },
              { title: "Seamless Integration", description: "Easily integrates with your existing processes.", imageSrc: assetMap.find(a => a.id === "feature1")?.url }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="metric" data-section="metric" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardTwo
            metrics={[
              { id: "1", value: "99.9%", description: "Uptime Guarantee" },
              { id: "2", value: "500+", description: "Clients Worldwide" }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            members={[
              { id: "1", name: "Sophia T.", role: "CEO & Founder", imageSrc: assetMap.find(a => a.id === "member1")?.url }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase
            faqs={[
              { id: "1", title: "How does Peak work?", content: "Peak utilizes AI technology to streamline operations." },
              { id: "2", title: "What industries can use Peak?", content: "Peak is adaptable for various industries seeking efficiency." }
            ]}
            imageSrc={assetMap.find(a => a.id === "faqImage")?.url}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact"
            title="Let's Talk"
            description="Get in touch to learn how Peak can transform your organization."
            imageSrc={assetMap.find(a => a.id === "faqImage")?.url}
            formWrapperClassName="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [
                { label: "Features", href: "#feature" },
                { label: "Pricing", href: "#pricing" }
              ]},
              { title: "Company", items: [
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]}
            ]}
            copyrightText="© 2025 | Peak"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
