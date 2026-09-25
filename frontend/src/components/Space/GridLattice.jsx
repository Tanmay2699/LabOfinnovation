/**
 * The mission-control lattice: 1px of grid-line every layout-grid-pitch, at
 * opacity-grid, radially masked.
 *
 * Behind dense technical content — the Innovation Lab, specification tables,
 * the certifications matrix, the process pages. It reads as an instrument
 * panel and makes tabular content feel measured.
 *
 * Never in the same section as StarField: two lattices of dots fight. Never
 * behind the hero. Do not align layout to it — the pitch is an ornament pitch.
 */
const GridLattice = ({ className = '' }) => (
  <div aria-hidden="true" className={`sky-grid ${className}`} />
);

export default GridLattice;
