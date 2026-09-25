import StarField from './StarField';
import NebulaWash from './NebulaWash';

/**
 * The inner-page hero sky: starfield plus the two-nebula pair, same recipe as
 * the Home hero. Drop it as the first child of a `.band-atmospheric` section
 * and keep content at `relative z-10`.
 */
const PageSky = () => (
  <>
    <StarField density="sparse" />
    <NebulaWash tone="indigo" size={560} top={-220} left={-180} />
    <NebulaWash tone="ion" size={420} bottom={-200} right={-140} phase={2600} />
  </>
);

export default PageSky;
