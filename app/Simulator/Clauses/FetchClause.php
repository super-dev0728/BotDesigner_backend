
<?php
namespace App\Clauses;
class FetchClause
{
    public function process()
    {
        
    }

}

import {Visit} from './models/Actions/Visit'
import { O_NOFOLLOW } from 'constants';
import {Bot} from '../components/models/Bot';
import { PageRow } from './models/PageRow';

const noflo = require('noflo');
// Also load any other dependencies you have
const fs = require('fs');

// Implement the getComponent function that NoFlo's component loader
// uses to instantiate components to the program
exports.getComponent = () => {
  // Start by instantiating a component
  const c = new noflo.Component();

  // Provide some metadata, including icon for visual editors
  c.description = 'Fetch function of acquisition engine';
  c.icon = 'file';
 
  c.inPorts.add('InAppBrowser', {
    datatype: 'object'
  });

  c.inPorts.add('InPageRows', {
    datatype: 'array'
  });

  c.inPorts.add('actions', {
    datatype: 'array'
  });

  c.inPorts.add('joinType', {
    datatype: 'string'
  });

  c.inPorts.add('flattenPagesPattern', {
    datatype: 'string'
  });

  c.inPorts.add('flattenPagesOrdinalKey', {
    datatype: 'string'
  });

  c.inPorts.add('numPartitions', {
    datatype: 'number'
  });

  c.inPorts.add('optimizer', {
    datatype: 'number'
  });

  c.outPorts.add('OutPageRows', {
    datatype: 'object'
  });

  c.outPorts.add('InAppBrowser', {
    datatype: 'object'
  });

  c.outPorts.add('OutError', {
    datatype: 'object'
  });

  // Implement the processing function that gets called when the
  // inport buffers have packets available
  c.process(((input, output) => {
    // Precondition: check that the "in" port has a data packet.
    // Not necessary for single-inport components but added here
    // for the sake of demonstration
    var inAppBrowser = input.getData('InAppBrowser');
    if (!input.hasData('actions')) {
      return;
    }
    const actions = input.getData('actions');
    var pageRowsOutput = new Array();
    if (input.hasData('pageRows')) 
    {
       var pageRows = input.getData('pageRows');
       pageRows.forEach( pageRow => {
       var page = pageRow.page;
       var fields = page.fields;
       var bot = new Bot(inAppBrowser);
       bot.setState(page.url,page.html,page.cookies);
       actions.forEach(action => 
        {
          bot = action.exec(bot);
        }
        );
        pageRowsOutput.push(new PageRow(bot.page, pageRow.fields));
      });
    }
    else
    {
      var bot = new Bot(inAppBrowser);
      actions.forEach(action => 
        {
          bot = action.exec(bot);
        }
        );
        pageRowsOutput.push(new PageRow(bot.page, []));
    }
     output.send({
      PageRows: pageRowsOutput
    });

    output.send({
      InAppBrowser: inAppBrowser
    });

    output.done();
  }));

  // Finally return to component to the loader
  return c;
}