# workScheduler

This is a Day Schedule that shows hours from 9 am to 5 pm, it let's you type what do you need to do each hour. The timeblocks change according to whether it is currently that time (red) or, if the time has passed (gray).


It also has the date and time on the top, and it is responsive! (thanks to Bootstrap).

There was a few difficult things:
* Setting up the local Storage for each input
* Displaying each stored input
    * Which I tried many things, but could not get it to work
    * The input does save, but I could not get it to stay there after refreshing the page.

But, there were also a few victories:
* Get the time to work with the setInterval function
```
    var datetime = null,
        date = null;

    // display updated time
    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('h:mm a'));
    };
    // update date
  
        datetime = $('#time')
        update();
```

* Getting the fields to change color according to the time
    * Not the cleanest code, but it worked!
