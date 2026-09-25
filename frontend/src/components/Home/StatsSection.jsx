import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import OrbitStat from '../UI/OrbitStat';

const StatsSection = () => {
  const stats = [
    { value: 1000, suffix: '+', label: 'Students Trained' },
    { value: 2000, suffix: '+', label: 'Kits Sold' },
    { value: 20, suffix: '+', label: 'Partner Organizations' },
    { value: 95, suffix: '%', label: 'Success Rate' },
  ];

  return (
    <section className="section-padding bg-surface-raised hairline-top">
      <div className="container-custom">
        <Reveal className="mb-11">
          <SectionHeading
            title={<>Impact That <span className="text-signal-300">Matters</span></>}
            lead="Transforming education and industry through innovation and excellence"
          />
        </Reveal>

        {/* Four in a band. All signal — the Home hero holds the page's ember. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <OrbitStat {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
