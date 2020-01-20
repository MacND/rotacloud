# rotacloud
A NodeJS module for interacting with the RotaCloud API.  Please refer to https://rotacloud.docs.apiary.io/ for the full spec.

The majority of calls correspond to appropriate HTTP verbs (GET/POST/PATCH etc.), but for clarity/brevity some methods have been renamed in this module.

## Changes from Apiary docs
Any endpoint that allows you to GET multiple records (list) will have a method called `list`, along with a `get` method for retrieving individual records.

Approving and Denying for `leave_requests`, `swap_requests`, and `unavailability_requests` is done via a method called `respond`, and passing the appropriate values in the `data` (body) object.

Making `leave_requests`, `swap_requests`, and `unavailability_requests` is done by using the `request` method of that endpoint.

For `users_clocked_in`, use the `break` method to start and stop a user's break by passing the appropriate values in the `data` (body) object..