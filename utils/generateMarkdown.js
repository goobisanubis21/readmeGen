// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description:

  ${data.description}

  #Table of Contents:
  
  [Installation](#Installation)
  [Usage](#Usage)
  [Contribution](#Contribution)
  [License](#License)
  [Questions](#Questions)

  #Installation:

  ${data.installation}

  #Usage:

  ${data.usage}

  #Contribution:

  ${data.contribution}

  #Testing

  ${data.test}

  #License:

  ${data.license}

  #Questions

  For any questions contact via:

  Email - ${data.email}
        or
  GitHub - ${data.username}

`;
}

module.exports = generateMarkdown;
