import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import PartnerRail from '../UI/PartnerRail';

/**
 * Partner wall.
 *
 * The emoji placeholders are gone, and so is the eight-tile grid — eight
 * boxed names on a dark page read as a table of contents, not a roster. The
 * names now ride the PartnerRail marquee: passed once, duplicated inside the
 * rail for the seamless loop, paused on hover and focus-within, and static
 * under reduced motion. The ground stays flat because the rail's edge mask
 * fades to transparent, not to a colour.
 *
 * When the real logos land: single-colour SVG, `fill="currentColor"`, set at
 * a consistent OPTICAL height rather than a consistent box height, dropped in
 * place of `name` inside the rail. Do not use full-colour logo PNGs on this
 * ground, and check display permission for each mark first.
 */
const PartnersSection = () => {
  const partners = [
    '🏢 TechCorp',
    '🎓 EduTech',
    '🤖 RoboSys',
    '🔬 InnovateLab',
    '🚀 FutureTech',
    '🧠 SmartAI',
    '⚡ AutoMate',
    '📊 DataDrive',
  ];

  return (
    <section className="section-padding bg-surface-base">
      <div className="container-custom">
        <Reveal variant="rise">
          <SectionHeading
            title={<>Trusted by <span className="text-signal-300">Industry Leaders</span></>}
            lead="Partnering with leading organizations to drive innovation and excellence"
            align="center"
          />
        </Reveal>

        <Reveal variant="fade" index={1} className="mt-11">
          <PartnerRail items={partners} label="Partner institutions" />
        </Reveal>
      </div>
    </section>
  );
};

export default PartnersSection;
