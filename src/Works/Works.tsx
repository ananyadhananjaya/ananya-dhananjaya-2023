const Works = () => {
  return (
    <div className="m-6 min-w-xl max-w-xl w-7/12 flex flex-col justify-between">
      <div>
        <div className="text-xl text-slate-700">Pomodora App</div>
        <div className="text-slate-600">
          Increase productivity and focus with the popular technique of timed
          work intervals followed by short breaks.
        </div>
        <br />
        <div className="text-xl text-slate-700">Onehit</div>
        <div className="text-slate-600">
          A simple way to share all your online presence with just one link. Add
          links to your website, social media accounts, and other online
          profiles
        </div>
        <br />
        <div className="text-xl text-slate-700">QR Code Maker</div>
        <div className="text-slate-600">
          The App allows you to quickly generate a custom QR code for any text.
          It has a Notion inspired UI. Simply input your text or link, generate
          the QR code, and share it with others.
        </div>
      </div>
      <div className="flex gap-4">
        {[
          { name: 'Pomodora', href: 'https://ax-pomodora.netlify.app/' },
          { name: 'Onehit', href: 'https://onehit.netlify.app/' },
          { name: 'QR Code Maker', href: 'https://qrcodeforfree.netlify.app/' }
        ].map((app) => (
          <a
            key={app.name}
            className="p-2 border border-slate-900 rounded-lg hover:drop-shadow-xl hover:bg-slate-50
             hover:border-0 hover:cursor-pointer"
            href={app.href}
            target="_blank"
            rel="noreferrer"
          >
            {app.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Works
