<?php
namespace App\Clauses;
class Action
{
    public Action()
    {

    }
    exec(bot : Bot) : Bot
    {
      
    }
}

import { Duration } from '../Duration';
import { Bot } from './../Bot';
import { Interaction } from './Interaction';
type Nullable<T> = T | null;
import { Guid } from "guid-typescript";
import { Node } from '../Node';
import { NodeType } from '../NodeType';
export class Click implements Interaction {
   
    // properties
    selector: string;
    delay: Nullable<Duration>;
    blocking : boolean;
  
    constructor (selector: string, delay: Nullable<Duration>, blocking: boolean ) {
     this.selector = selector;
     this.delay = delay;
     this.blocking = blocking;
    }
  
    exec(bot : Bot) : Bot
    {
       bot.click(this.selector);
       return bot;
    }
   }