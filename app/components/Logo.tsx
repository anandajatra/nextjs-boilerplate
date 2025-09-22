import Image from 'next/image';

export default function AnandaJatraLogo({ className = "w-16 h-16", variant = "full" }: { className?: string, variant?: "full" | "icon" }) {
  // Using placeholder for the original logo image
  // Replace this src with your actual logo image path
  const logoSrc = "/Logo-02.png";

  if (variant === "icon") {
    return (
      <div className={`${className} relative rounded-full overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50`}>
        <Image
          src={logoSrc}
          alt="Ananda Jatra Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <Image
        src={logoSrc}
        alt="Ananda Jatra Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}