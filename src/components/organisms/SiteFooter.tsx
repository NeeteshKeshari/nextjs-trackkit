export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <strong>Neetesh Keshari</strong>
          <p>Made with ❤️ for Next.js developers</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/NeeteshKeshari/nextjs-trackkit"
            target="_blank"
            rel="noreferrer"
            data-track-click
            data-track-label="GitHub"
            data-track-cta-type="Text"
            data-track-destination="External"
          >
            GitHub
          </a>
          <span>© {year} TrackKit. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
