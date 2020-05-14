# Many to Many Relationships

<!-- ![alt text](pics/the-office-cast.jpg "temp") -->
<img src="pics/the-office-cast.jpg" alt="drawing" width="600"/>


#### SWBATs:
1. Implement both sides of a many to many relationship
2. Practice keeping groups of data related to classes on the class as a class variable
3. Demonstrate **Single Source of Truth** by not storing collections of objects on other objects
4. Demonstrate **Single Source of Truth** by not storing one object in multiple collections


![alt text](pics/What-Should-I-Name-My-Class.png "temp")
______

When we think about what entities we want to model in our programs, it's important to think about their relationships to each other. Yesterday, we talked about one to many relationships. 

- One to Many

    User -< Tweet

    State -< City

    Government -< Citizen

    Company -< Employee

    Team -< Player

    League -< Team -< Player

    Country -< State -< City

   Ceremony -< Particpant -< Award 




& today, let's talk about many to many! If we think about the Uber or Lyft domain, they have Passengers and Drivers. A driver can have many passengers and a passenger can have many drivers. A driver might not know about their passenger directly. Likewise, a passenger may not directly know about their driver. The way that a driver will know about their passenger is through the ride. When a driver gets a new ride, they will recieve the information about their passenger. Likewise, whenever a passenger books a new ride, they will recieve some information about their driver.

    Driver -< Ride >- Passenger

    - Driver has many Rides
    - Driver has many Passengers through Rides
    - Passenger has many Rides
    - Passenger has many Drivers through Rides

Another example we can think of is the relationship between doctor and patient entities. A doctor can have many patients and a patient can see many doctors. A doctor may not know who their patients are directly, but through appointments, they'll know. Likewise, through an appointment, a patient knows information about their doctor.

Doctor -< Appointment >- Patient

The purpose of the class through which the two classes are joined is to store a record for each of the combinations of these other two classes. You can think of this class as a place to store information or attributes of the relationships between the two entities.


<p>
<details>
<summary> What are some other examples of many to many relationships?</summary>
<pre>
<ul>
<li>SocialMediaSite -< Account >- User</li>
<li>Student -< Enrollment >- Course </li>
<li>Applicant -< Interview >- Interviewer </li>
<li>Highway -< Ride/Drive >- Car </li>
<li>Bus -< Ticket >- Passenger </li>
<li>Landlord -< Property >- Tenenant </li>
<li>Building -< Apartment >- Landlord </li>
<li>NailTechnician -< Appointment >- Customer</li>
<li>Company -< Product >- Client</li>
</ul>
</pre>
</details>
</p>

___

<img src="pics/listening-meme.jpg" alt="drawing" width="400"/>


## Applicant -< Interview >- Interviewer

#### How can an interviewer learn about the applicants?
    1. For an interviewer, find all their interviews
    2. For those interviews, get the applicants' information

In the Applicant -< Interview >- Interviewer, we have three classes - `Applicant`, `Interview`, `Interviewer`. Take a look at the image below. It's a [google sheet](sheets.new) with information about our classes. This is another way to visualize our classes and their attributes. It's also going to help us prepare for learning about databases next week. We display each entity in our domain (applicant, interviewer, interview). We show how each  entity has certain attributes. For example, our *applicant* object has an *object_id*, *first_name*, *last_name*, and *years_of_experience*. Each row is an instance of a class. Each object's *object_id* is an attribute that will allow us to uniquely identify an instance. If we are a large corporation with 3,000 applicants and 4 of our applicants are named "Jane Doe", we would easily be able to tell them apart in our code using their unique identifier, *object_id*.


![alt text](pics/excel-pseudo-db.png "temp")


*Interviewer* has many *Applicants* through  *Interview* and *Applicant* has many *Interviewers* through *Interview*, too. By examining the attributes of the *Interviewer* and *Applicant*, we can see that both of them have no direct access to each other without *Interview*. *Interview* knows who the participants are by having a reference to an instance of an applicant and a reference to an instance of an interviewer.

<!-- ![Ready for this interview](pics/ready.jpg) -->
<img src="pics/ready.jpg" alt="drawing" width="400"/>

___

### What are the steps we took to create the many to many relationship between an Interviewer and an Applicant through an Interview?

__1. Create Applicant Class__


- Implement single source of truth
    - `@@all == []`
    - Applicant.all method


__2. Create Interviewer Class__

- Implement single source of truth
    - `@@all == []`
    - Applicant.all method

__3. Create Interview Class__

- Implement single source of truth
    - `@@all == []`
    - Applicant.all method
- Interview >- Applicant
    - Therefore, Interview needs to have a reference to the Applicant it belongs to
    - We can do this by passing in an Applicant instance to `initialize` when we create a new
        instance of Interview
- Interview >- Interviewer
    - Therefore, Interview needs to have a reference to the Interviewer it belongs to
    - We can do this by passing in an Interviewer instance to `initialize` when we create a new
        instance of Interview

__4. For an Interviewer, find all their Interviews__

- Interviewer#interviews
    ```Ruby
    # inside Interviewer class

    def interviews
        Interview.all.select do |interview_instance|
            interview_instance.interviewer == self
        end
    end
    ```
__5. For all those interviews of an interviewer, get the applicants__

- Interviewer#applicants
    ```Ruby
    # inside Interviewer class

    def applicants
        self.interviews.map do |interview_instance|
            interview_instance.applicant
        end
    end
    ```
__6. Repeat steps 4 & 5 with the Applicant class__

- For an Applicant, find all their Interviews
    - Applicant#interviews
        ```Ruby
        # inside Applicant class

        def interviews
            Interview.all.select do |interview_instance|
                interview_instance.applicant == self
            end
        end
        ```
- For all those interviewers of an interviewer, get the interviewers
    - Applicant#interviewers
        ```Ruby
        # inside Applicant class

        def interviewers
            self.interviews.map do |interview_instance|
                interview_instance.interviewer
            end
        end
        ```

**NOTE:** Don't forget to sprinkle lots of testing throughout these steps 😁




---- 
#### Extra Resources

* [Time Complexity for Ruby developers](https://www.rubyguides.com/2018/03/time-complexity-for-ruby-developers/)

* [Ruby Fun Facts](https://www.geeksforgeeks.org/interesting-facts-about-ruby-programming-language/)


![youtube](pics/source.gif)

