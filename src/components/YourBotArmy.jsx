import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div className="bot-army">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onClick={() => onRelease(bot.id)}
          onDischarge={() => onDischarge(bot.id)}
          showDischarge
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
