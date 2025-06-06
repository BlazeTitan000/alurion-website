import React from "react";

interface MissionSectionProps {
  id?: string;
}

const MissionSection = ({ id }: MissionSectionProps) => {
  return (
    <section id={id} className="section bg-white text-alurion-primary relative">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80)",
        }}
      ></div>

      <div className="container p-4 md:p-6 mx-auto relative z-10 text-center">
        <div className="max-w-6xl md:max-w-5xl mx-auto">
          <h2 className="section-title text-alurion-primary mb-6 md:mb-12 text-center">
            Our Mission
          </h2>

          <div className="bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-sm p-6 sm:p-10 md:p-14 rounded-xl shadow-xl border border-alurion-secondary/10">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-center">
              <span className="font-semibold text-alurion-secondary">
                Our mission
              </span>{" "}
              is to create lasting impact by forging meaningful connections
              between exceptional talent and visionary organizations.
            </p>

            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="flex-1 md:p-6 bg-white/50 rounded-lg border-t border-l border-white">
                <h3 className="text-md md:text-lg font-medium text-alurion-primary mb-3 text-center">
                  Elevating Potential
                </h3>
                <p className="text-alurion-primary/90 text-center">
                  We elevate potential and empower organizations through
                  tailored talent solutions that span recruitment, leadership
                  development, and organizational effectiveness.
                </p>
              </div>

              <div className="flex-1 md:p-6 bg-white/50 rounded-lg border-t border-l border-white">
                <h3 className="text-md md:text-lg font-medium text-alurion-primary mb-3 text-center">
                  Building Excellence
                </h3>
                <p className="text-alurion-primary/90 text-center">
                  As trusted advisors, we partner with clients to cultivate
                  resilient teams, unlock growth, and foster enduring excellence
                  across industries and markets.
                </p>
              </div>
            </div>

            <p className="text-md md:text-lg leading-relaxed italic border-l-4 border-alurion-accent pl-6 max-w-3xl mx-auto text-center">
              "We don't just fill positions—we forge meaningful connections that
              transform organizations and elevate careers to new heights."
            </p>
          </div>
        </div>
      </div>

      {/* Abstract decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-alurion-accent/10 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-alurion-accent/5 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full border border-alurion-secondary/20 -z-10"></div>
    </section>
  );
};

export default MissionSection;
