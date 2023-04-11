export default function Head(state) {
  //const { store, status, req, error } = state
  const { store } = state
  //const { path } = req
  const { title } = store
  //console.log(path, store, status, req, error)

  const pageStyles = [
    `<link rel="stylesheet" href="/_public/styles/main.css">`,
    `<link rel="stylesheet" href="https://use.typekit.net/nln6hzq.css">`
  ]

  const revealStyles = [
    `<link rel="stylesheet" href="/_public/bundles/reveal-styles.css" />`,
    `<link rel="stylesheet" href="/_public/styles/reveal-theme.css" />`
  ]

  let styles = []
  if (store.kind == 'slides') {
    styles = revealStyles
  } else {
    styles = pageStyles
  }

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SeattleJS ${title ? ` - ${title}` : ``}</title>
        <meta name="description" content="SeattleJS is the largest JavaScript and web developer meetup in Seattle. Our meetings are the 2nd Wednesday of each month. We are an inclusive community and welcome everyone, including folks who are just getting started in tech.">
        <link rel="icon" href="/_public/favicon.ico">
        ${styles.join('\n')}
      </head>
    `
}
