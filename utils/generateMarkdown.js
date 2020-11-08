// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description:

  ${data.description}

  (https://img.shields.io/badge/license-${data.license})

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

  Copyright [2020] [${data.title}]

  Licensed under the  ${data.license} License;
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.${data.license}.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  #Questions

  For any questions contact via:

  Email - ${data.email}
        or
  GitHub - ${data.username}

`;
}

module.exports = generateMarkdown;
