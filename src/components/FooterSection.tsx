const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-light">
          © 2026 Грибная инспекция
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/ip.chaser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            @ip.chaser
          </a>
          <a
            href="mailto:contact@mushroominspection.by"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-muted-foreground/50 text-xs font-light">
          сделано с любовью ❤️ в{" "}
          <a
            href="https://t.me/dmitryutlik"
            target="_blank"
            rel="noopener noreferrer"
            className="italic hover:text-muted-foreground transition-colors"
          >
            Utlik.Co
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
