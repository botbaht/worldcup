const config = require('./config.json');
const moment = require('moment');

module.exports = {
  getMenuBubble: (replyToken) => {
    return {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'FIFA World Cup 2018',
            size: 'xl',
            weight: 'bold'
          }
        ]
      },
      hero: {
        type: 'image',
        url: 'https://sitthi.me:3807/static/fifa.jpg',
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'button',
                    style: 'primary',
                    action: {
                      type: 'postback',
                      label: 'Last Match',
                      displayText: 'Last Match',
                      data: 'LAST'
                    }
                  },
                  {
                    type: 'button',
                    style: 'primary',
                    action: {
                      type: 'postback',
                      label: 'Next Match',
                      displayText: 'Next Match',
                      data: 'NEXT'
                    }
                  }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                spacing: 'sm',
                contents: [
                  {
                    type: 'button',
                    style: 'primary',
                    action: {
                      type: 'postback',
                      label: 'Schedule',
                      displayText: 'Schedule',
                      data: 'SCHEDULE'
                    }
                  },
                  {
                    type: 'button',
                    style: 'primary',
                    action: {
                      type: 'postback',
                      label: 'Table',
                      displayText: 'Table',
                      data: 'TABLE'
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          getSourceButton(replyToken)
        ]
      }
    }
  },
  menuLiveBox: {
    type: 'box',
    layout: 'horizontal',
    spacing: 'sm',
    contents: [
      {
        type: 'text',
        text: 'LIVE !',
        size: 'lg',
        color: '#555555',
        weight: 'bold',
        align: 'center'
      }
    ]
  },
  getLiveMatchBox: (match) => {
    let label = `${match.match_hometeam_name}  ${match.match_hometeam_score} : ${match.match_awayteam_score}  ${match.match_awayteam_name}`;
    return {
      type: 'button',
      style: 'primary',
      action: {
        type: 'postback',
        label: label,
        displayText: 'Live Report !!',
        data: 'LIVE'
      }
    }
  },
  getStandingBubble: (teams, replyToken) => {
    let bubble = {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: teams[0].league_name,
            weight: 'bold',
            size: 'xl',
            margin: 'md'
          },
          {
            type: 'separator',
            margin: 'xl'
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'md',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Team',
                    size: 'sm',
                    color: '#555555',
                    weight: 'bold',
                    flex: 3
                  },
                  {
                    type: 'text',
                    text: 'P',
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                    weight: 'bold'
                  },
                  {
                    type: 'text',
                    text: 'W',
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                    weight: 'bold'
                  },
                  {
                    type: 'text',
                    text: 'D',
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                    weight: 'bold'
                  },
                  {
                    type: 'text',
                    text: 'L',
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                    weight: 'bold'
                  },
                  {
                    type: 'text',
                    text: 'Pt',
                    size: 'sm',
                    color: '#111111',
                    align: 'end',
                    weight: 'bold'
                  }
                ]
              },
              {
                type: 'separator',
                margin: 'md'
              },
            ]
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'Schedule',
              data: 'SCHEDULE',
              displayText: 'Schedule'
            },
            style: 'primary'
          },
          getSourceButton(replyToken)
        ]
      }
    };
    teams.forEach(team => {
      let row = {
        type: 'box',
        layout: 'horizontal',
        margin: 'md',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'icon',
                url: `${config.BASE_URL}/static/flag/${team.team_name.replace(' ', '')}.png`,
                size: 'sm'
              },
              {
                type: 'text',
                text: team.team_name,
                size: 'sm',
                color: '#555555'
              }
            ],
            flex: 3
          },
          {
            type: 'text',
            text: team.overall_league_payed,
            size: 'sm',
            color: '#111111',
            align: 'end'
          },
          {
            type: 'text',
            text: team.overall_league_W,
            size: 'sm',
            color: '#00ff00',
            align: 'end'
          },
          {
            type: 'text',
            text: team.overall_league_D,
            size: 'sm',
            color: '#aaaaaa',
            align: 'end'
          },
          {
            type: 'text',
            text: team.overall_league_L,
            size: 'sm',
            color: '#ff0000',
            align: 'end'
          },
          {
            type: 'text',
            text: team.overall_league_PTS,
            size: 'sm',
            color: '#111111',
            align: 'end'
          }
        ]
      };
      bubble.body.contents[2].contents.push(row);
    });

    return bubble;
  },
  getScheduleBubble: (matchs, replyToken) => {
    let bubble = {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: matchs[0].league_name,
            weight: 'bold',
            size: 'xl',
            margin: 'md'
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'Table',
              data: 'TABLE',
              displayText: 'Table'
            },
            style: 'primary'
          },
          getSourceButton(replyToken)
        ]
      }
    };
    matchs.forEach(match => {
      let matchDateTime = moment(`${match.match_date} ${match.match_time}`).add(5, 'hours');
      let row = {
        type: 'box',
        layout: 'horizontal',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            flex: 5,
            contents: [
              {
                type: 'text',
                size: 'sm',
                text: `${matchDateTime.format('YYYY-MM-DD HH:mm')}`,
                align: 'start'
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'icon',
                    url: `${config.BASE_URL}/static/flag/${match.match_hometeam_name.replace(' ', '')}.png`,
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: match.match_hometeam_name,
                    flex: 3,
                    align: 'start'
                  },
                  {
                    type: 'text',
                    text: `${match.match_hometeam_score || '?'}`,
                    flex: 1,
                    align: 'center'
                  },
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'icon',
                    url: `${config.BASE_URL}/static/flag/${match.match_awayteam_name.replace(' ', '')}.png`,
                    size: 'sm',
                  },
                  {
                    type: 'text',
                    text: match.match_awayteam_name,
                    flex: 3,
                    align: 'start'
                  },
                  {
                    type: 'text',
                    text: `${match.match_awayteam_score || '?'}`,
                    flex: 1,
                    align: 'center'
                  },
                ]
              }
            ]
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            flex: 3,
            height: 'sm',
            gravity: 'center',
            style: 'secondary',
            action: {
              type: 'postback',
              label: 'Detail',
              data: 'INFO_' + match.match_id,
              displayText: `${match.match_hometeam_name} VS ${match.match_awayteam_name}`
            },
          }
        ]
      };
      bubble.body.contents.push({ "type": "separator" });
      bubble.body.contents.push(row);
    });

    return bubble;
  },
  getMatchContentBubble: (title, match, replyToken) => {
    let contents = [];
    // title
    contents.push({
      type: 'text',
      text: match.match_status || 'Next Match',
      wrap: true,
      weight: 'bold',
      gravity: 'center',
      size: 'lg'
    });
    //name vs name
    contents.push({
      type: 'box',
      layout: 'baseline',
      spacing: 'sm',
      contents: [
        {
          type: 'icon',
          url: `${config.BASE_URL}/static/flag/${match.match_hometeam_name.replace(' ', '')}.png`,
          size: 'sm',
        },
        {
          type: 'text',
          text: match.match_hometeam_name,
          flex: 3,
          align: 'start'
        },
        {
          type: 'text',
          text: `${match.match_hometeam_score} : ${match.match_awayteam_score}`,
          flex: 1,
          align: 'center'
        },
        {
          type: 'text',
          text: match.match_awayteam_name,
          flex: 3,
          align: 'end'
        },
        {
          type: 'icon',
          url: `${config.BASE_URL}/static/flag/${match.match_awayteam_name.replace(' ', '')}.png`,
          size: 'sm',
        }
      ]
    });
    // detail
    let detail = {
      type: 'box',
      layout: 'vertical',
      margin: 'lg',
      spacing: 'sm',
      contents: []
    };
    // scorer
    if (match.goalscorer) {
      detail.contents.push({
        type: 'box',
        layout: 'baseline',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: 'Scorer',
            color: '#aaaaaa',
            size: 'sm',
            weight: 'bold',
          }
        ]
      });
      match.goalscorer.filter(s => s.time !== '').forEach(scorer => {
        detail.contents.push({
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: scorer.time,
              color: '#aaaaaa',
              size: 'sm',
              flex: 1
            },
            {
              type: 'text',
              text: `${scorer.score}`,
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 1
            },
            {
              type: 'icon',
              url: `${config.BASE_URL}/static/football.png`,
              size: 'sm',
            },
            {
              type: 'text',
              text: `${scorer.home_scorer + scorer.away_scorer}`,
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 4
            },
            {
              type: 'icon',
              url: `${config.BASE_URL}/static/flag/${(scorer.home_scorer ? match.match_hometeam_name : match.match_awayteam_name).replace(' ', '')}.png`,
              size: 'sm',
            }
          ]
        });
      });
    }
    // card
    if (match.cards) {
      detail.contents.push({
        type: 'box',
        layout: 'baseline',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text: 'Card',
            color: '#aaaaaa',
            size: 'sm',
            weight: 'bold',
          }
        ]
      });
      match.cards.filter(c => c.time !== '').forEach(card => {
        detail.contents.push({
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: card.time || '-',
              color: '#aaaaaa',
              size: 'sm',
              flex: 1
            },
            {
              type: 'icon',
              url: `${config.BASE_URL}/static/${card.card}.png`,
              size: 'sm',
            },
            {
              type: 'text',
              text: `${card.home_fault + card.away_fault}`,
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 4
            }
          ]
        });
      });
    }
    if (detail.contents.length > 0) {
      contents.push(detail);
    }

    let body = {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      contents: contents,
    };
    let matchDateTime = moment(`${match.match_date} ${match.match_time}`).add(5, 'hours');
    let footer = {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          type: 'box',
          layout: 'baseline',
          margin: 'md',
          contents: [
            {
              type: 'text',
              text: 'Group',
              color: '#aaaaaa',
              size: 'sm',
              flex: 2
            },
            {
              type: 'text',
              text: `${match.league_name.replace(' Group ', '')}`,
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 4
            }
          ]
        },
        {
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Date',
              color: '#aaaaaa',
              size: 'sm',
              flex: 2
            },
            {
              type: 'text',
              text: `${matchDateTime.format('YYYY-MM-DD HH:mm')}`,
              wrap: true,
              size: 'sm',
              color: '#666666',
              flex: 4
            }
          ]
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          type: 'button',
          style: 'primary',
          action: {
            type: 'postback',
            label: 'Head 2 Head',
            displayText: `${match.match_hometeam_name} VS ${match.match_awayteam_name}`,
            data: `H2H_${match.match_id}`,
          },
        },
        getSourceButton(replyToken)
      ]
    };
    let container = {
      type: 'bubble',
      body: body,
      footer: footer,
    };
    // if (match.match_status !== 'FT') container.footer = footer;
    return container;
  },
  getH2HContentBubble: (title, info, replyToken) => {
    let contents = [];
    // title
    contents.push({
      type: 'text',
      text: title,
      wrap: true,
      weight: 'bold',
      gravity: 'center',
      size: 'lg'
    });
    // h2h
    if (info.firstTeam_VS_secondTeam) {
      info.firstTeam_VS_secondTeam.forEach(match => {
        contents.push({
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'icon',
              url: `${config.BASE_URL}/static/flag/${match.match_hometeam_name.replace(' ', '')}.png`,
              size: 'sm',
            },
            {
              type: 'text',
              text: match.match_hometeam_name,
              flex: 3,
              align: 'start'
            },
            {
              type: 'text',
              text: `${match.match_hometeam_score} : ${match.match_awayteam_score}`,
              flex: 1,
              align: 'center'
            },
            {
              type: 'text',
              text: match.match_awayteam_name,
              flex: 3,
              align: 'end'
            },
            {
              type: 'icon',
              url: `${config.BASE_URL}/static/flag/${match.match_awayteam_name.replace(' ', '')}.png`,
              size: 'sm',
            }
          ]
        });
      });
    }
    // detail
    // let detail = {
    //   type: 'box',
    //   layout: 'vertical',
    //   margin: 'lg',
    //   spacing: 'sm',
    //   contents: []
    // };
    // // scorer
    // if (match.goalscorer) {
    //   detail.contents.push({
    //     type: 'box',
    //     layout: 'baseline',
    //     spacing: 'sm',
    //     contents: [
    //       {
    //         type: 'text',
    //         text: 'Scorer',
    //         color: '#aaaaaa',
    //         size: 'sm',
    //         weight: 'bold',
    //       }
    //     ]
    //   });
    //   match.goalscorer.filter(s => s.time !== '').forEach(scorer => {
    //     detail.contents.push({
    //       type: 'box',
    //       layout: 'baseline',
    //       spacing: 'sm',
    //       contents: [
    //         {
    //           type: 'text',
    //           text: scorer.time,
    //           color: '#aaaaaa',
    //           size: 'sm',
    //           flex: 1
    //         },
    //         {
    //           type: 'text',
    //           text: `${scorer.score}`,
    //           wrap: true,
    //           color: '#666666',
    //           size: 'sm',
    //           flex: 1
    //         },
    //         {
    //           type: 'icon',
    //           url: `${config.BASE_URL}/static/football.png`,
    //           size: 'sm',
    //         },
    //         {
    //           type: 'text',
    //           text: `${scorer.home_scorer + scorer.away_scorer}`,
    //           wrap: true,
    //           color: '#666666',
    //           size: 'sm',
    //           flex: 4
    //         },
    //         {
    //           type: 'icon',
    //           url: `${config.BASE_URL}/static/flag/${(scorer.home_scorer ? match.match_hometeam_name : match.match_awayteam_name).replace(' ', '')}.png`,
    //           size: 'sm',
    //         }
    //       ]
    //     });
    //   });
    // }
    // // card
    // if (match.cards) {
    //   detail.contents.push({
    //     type: 'box',
    //     layout: 'baseline',
    //     spacing: 'sm',
    //     contents: [
    //       {
    //         type: 'text',
    //         text: 'Card',
    //         color: '#aaaaaa',
    //         size: 'sm',
    //         weight: 'bold',
    //       }
    //     ]
    //   });
    //   match.cards.filter(c => c.time !== '').forEach(card => {
    //     detail.contents.push({
    //       type: 'box',
    //       layout: 'baseline',
    //       spacing: 'sm',
    //       contents: [
    //         {
    //           type: 'text',
    //           text: card.time || '-',
    //           color: '#aaaaaa',
    //           size: 'sm',
    //           flex: 1
    //         },
    //         {
    //           type: 'icon',
    //           url: `${config.BASE_URL}/static/${card.card}.png`,
    //           size: 'sm',
    //         },
    //         {
    //           type: 'text',
    //           text: `${card.home_fault + card.away_fault}`,
    //           wrap: true,
    //           color: '#666666',
    //           size: 'sm',
    //           flex: 4
    //         }
    //       ]
    //     });
    //   });
    // }

    // contents.push(detail);

    let body = {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      contents: contents,
    };
    // let matchDateTime = moment(`${match.match_date} ${match.match_time}`).add(5, 'hours');
    // let footer = {
    //   type: 'box',
    //   layout: 'vertical',
    //   contents: [
    //     {
    //       "type": "separator",
    //       "margin": "xxl"
    //     },
    //     {
    //       type: 'box',
    //       layout: 'baseline',
    //       margin: 'md',
    //       contents: [
    //         {
    //           type: 'text',
    //           text: 'Group',
    //           color: '#aaaaaa',
    //           size: 'sm',
    //           flex: 2
    //         },
    //         {
    //           type: 'text',
    //           text: `${match.league_name.replace(' Group ', '')}`,
    //           wrap: true,
    //           color: '#666666',
    //           size: 'sm',
    //           flex: 4
    //         }
    //       ]
    //     },
    //     {
    //       type: 'box',
    //       layout: 'baseline',
    //       spacing: 'sm',
    //       contents: [
    //         {
    //           type: 'text',
    //           text: 'Date',
    //           color: '#aaaaaa',
    //           size: 'sm',
    //           flex: 2
    //         },
    //         {
    //           type: 'text',
    //           text: `${matchDateTime.format('YYYY-MM-DD HH:mm')}`,
    //           wrap: true,
    //           size: 'sm',
    //           color: '#666666',
    //           flex: 4
    //         }
    //       ]
    //     },
    //     getSourceButton(replyToken)
    //   ]
    // };
    let container = {
      type: 'bubble',
      body: body,
    };
    // if (match.match_status !== 'FT') container.footer = footer;
    return container;
  }
}

// {
//   type: 'button',
//   action: {
//     type: 'postback',
//     label: 'Subscribe Live Result',
//     data: 'SUBSCRIBE_' + match.match_id,
//     displayText: 'subscribe'
//   },
//   style: 'primary'
// }
function getSourceButton(replyToken) {
  return {
    type: 'button',
    action: {
      type: 'uri',
      label: 'View Source [dev]',
      uri: `https://sitthi.me:3807/downloaded/${replyToken}.json`
    },
    style: 'secondary'
  }
}

function createPostBackOption(label, key, data) {
  let shortLabel = label.trimLeft().trimRight().substring(0, 12);
  return { label: shortLabel, type: 'postback', data: (key + (data ? ('_' + data) : '')), displayText: shortLabel };
}

function createUrlOption(label, uri) {
  return { label: label, type: 'uri', uri: uri };
}