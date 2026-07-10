import { Badge } from "../atoms/Badge";
import { ButtonLink } from "../atoms/ButtonLink";

type FeatureCardProps = {
  badge: string;
  title: string;
  description: string;
  href: string;
  position: number;
};

export function FeatureCard({
  badge,
  title,
  description,
  href,
  position,
}: FeatureCardProps) {
  return (
    <article
      className="feature-card surface"
      data-track-context
      data-track-view
      data-track-content-name={title}
      data-track-content-type="Content"
      data-track-content-variant={badge}
      data-track-content-media="Text"
      data-track-position={position}
      data-track-cardinality="3"
    >
      <Badge tone={position === 1 ? "blue" : position === 2 ? "green" : "purple"}>
        Molecule
      </Badge>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="feature-card-footer">
        <span>{badge}</span>
        <ButtonLink href={href} label={`Open ${title}`} variant="secondary">
          View example
        </ButtonLink>
      </div>
    </article>
  );
}
