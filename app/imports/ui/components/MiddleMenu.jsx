import React from 'react';
import { Dropdown, Grid } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (

        <Grid centered container columns={9}>
          <Grid.Column>
            <Dropdown text='MEN'>
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown text='WOMEN'>
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown text='KIDS'>
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown text='BRANDS'>
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown text='SALE'>
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

        </Grid>

    );
  }
}
