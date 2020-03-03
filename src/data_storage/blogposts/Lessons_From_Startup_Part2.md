---
path: "/what-ive-learned-from-being-a-developer-in-a-startup-part-2"
date: "2020-03-03"
title: "What I’ve learned from being a developer in a startup - Part II"
tags: ['Soft skills', 'Developer life', 'Startups', 'Best practices', 'Code quality']
---

### Hello, everyone : )
Let's continue where we stopped in *[Part I](/what-ive-learned-from-being-a-developer-in-a-startup)*. 

### 9. Write code that others can understand, and make sure, that they understand it.
Writing code with following best practices and maintaining good structure might not be enough, because code, that looks perfectly readable and structured to you might look like junk to someone else, we all have different habits and understanding of elegance.

Talking to people saves us yet again, young padawan! 

If your company has established development team meetings(and they really should be a dev team meeting, at least once every 2 weeks), then that is the perfect place to talk about code structure, naming conventions, code style etc. Writing that stuff down right on the spot is a good idea, to make sure nobody forgets *( and that is where style guides come from)*. It will take you at least an hour or two, to go over details of the code/project structure, but it will save you from months of *"What is this?"* or *"What does it do?"*.

And once you are all on the same page on how your code and project as a whole should be organized, ask a colleague to have a look at your code once in a while *( might not be possible in big teams, but still)*, just to make sure that someone else can read it. Because sometimes people just won't tell you, that your code is hard to work with, until it starts to cause all sorts of trouble for them and team as a whole. They can have 10000 different reasons for such behavior, the best thing you can do is to show them that you are ok with receiving criticism. 

When your colleague tells you something like *"I don't understand this part of your code."* or *"You've used a global variable here, don't do that, please..."*, don't get angry, keep your ego in check. Try to explain reasoning behind your code, explain how it works. It is the right thing to do and a good learning opportunity for all sides of the discussion.

### 10. Learn why good practices are important.
Like I said in *[Part I](/what-ive-learned-from-beeing-a-developer-in-a-startup)*, SOLID, design patterns and best practices exist for a reason. It is important for a developer know them, but also you must know the reason why they exist, what is it that they can protect your project from, what are future benefits.

In short most of those exist to save you from technological debt,  to make sure your codebase is understandable, resistant to change(your new current changes/additions to codebase don’t break something else in the project ).

### 11. Avoid inventing stuff use existing code whenever you can.
As a programmer I love writing my own code, it is fun and gives me that sense of control, but in big project maintaining something like that will give you a headache in a few weeks.

Long story short… It is better to depend on a stable secure code package, that you know well, than your own solution, that has never earned a single star on GitHub.

But when it comes to using libraries and frameworks, choose wisely, make sure that it is a good implementation, look at number of stars GitHub  (if we’re talking about open source), check Issues section, make sure it is a good instrument any way you can, and make sure it will help you more than once (YAGNI principle)

I’m not telling that you should never write your own code, I’m telling that you shouldn’t if there is a better way.

>*"If I have seen further than others, it is by standing upon the shoulders of giants."*
>>>>>>*Sir Isaac Newton* 

### 12. Realism and pragmatism.
These 2 concepts, in my opinion, are something, every software engineer/developer/programmer must remember and master.

Realism in this case means, that you must know your current limits, know how much time and effort it will take to overcome them, knowing how much work can be done in the allotted time, knowing strengths and weaknesses of your team and yourself as a developer.

Pragmatism means, that everything in your work must serve a purpose, best practices must not be followed just because you’ve read about those a few days ago, technology must not be used just because it is the newest thing around. Every concept, every line of code, every meeting must add something to the final product or conditions it is being developed in *(saving you time, making it easier to do your job etc.)*.

### 13. Validate your solutions before you implement them.
To do so write pseudocode and look at number of cases you need to handle
Even if solution for a problem is already in your head, google it, just to see if there is a better alternative.

### 14. Be ready for changes.
If you are in a startup, be ready for your product to change shape, form and concept a dozen of times before and after the initial release. It is just going to happen, so it is in your best interest to be mentally ready for it. 

Btw, from what I’ve seen if your code/project structure is good(everything is divided into separate modules/methods/entities and is logically organized), those changes are less stressful and easier to perform.

### 15. Learn to make ‘time to complete’ estimates.
Stuff like this happens, your boss asks you: *“When new feature is going to be ready for production?”*.
And in less than a second you answer without thinking: *“In a week”*.

A 2 weeks later everybody starts: *“You said 1 week!!!b Marketing campaign has already started. Other people depend on result of your work.”*

And yes, you that did say *“1 week”*, take responsibility, and next time think before you answer questions like that. This is a simple question, yet it is not to be taken likely.

_In future blogs I’ll share a check list of things you might want to think about before you make any ‘time to complete’ estimates for your clients/co-workers._

### Summary 
In this series I’ve talked about meetings, standards, best practices etc. 

What I’m trying to tell here is that, in every development team(and in every developer) there must be a certain level of discipline when it comes to code quality and organization. That does not mean, that it has to reach level of unnecessary bureaucracy.

When I say *"know your limits"*, I’m not telling you to stop going forward, I say *"be in touch with reality"*. 

We all have our strengths and weaknesses, working to improve yourself, that is not something anyone should ever forget about, yet it is ok to ask for help or advice from time to time, and it is even better to devote some time to help others.

In short non of these should be taken to the extremes, finding balance in discipline, team communication, hard work, needed rest, learning etc. is just as important as following each of those concepts individually.

I hope this blog is going to be of use to you, keep creating cool stuff : ) 

Sea ya later.

