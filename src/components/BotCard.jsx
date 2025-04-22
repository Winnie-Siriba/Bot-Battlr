import React from "react";

function BotCard({ bot, onClick, onDischarge, showDischarge }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>❤️ {bot.health} ⚔️ {bot.damage} 🛡️ {bot.armor}</p>
      {showDischarge && (
        <button className="discharge-btn" onClick={(e) => {
          e.stopPropagation();
          onDischarge();
        }}>
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
