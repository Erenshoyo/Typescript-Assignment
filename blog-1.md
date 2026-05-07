# Keeping the code DRY with Pick and Omit in TypeScript.

## Introduction

In web development or software development as a whole, one of the most fundamental principles is **DRY**-"Don't Repeat Yourself". As our project grows, we often use various variations of already existing functions, methods and so on, which breaks the fundamental of **DRY** priciple. This is where these two utility types `Pick` and `Omit` helps us to avoid repeating the same structures again by creating a separate interface of the subjective structure

## Body Paragraph

Imagine having a parent interface named `User`:

```typescript
interface User{
id: string;
userName: string;
email: string;
phoneNumber: string;
}
```

Now, if we need a type for the user profile, we usually are tempted to create a new interface with those type but that means when we have to update those, we will need to update multiple interfaces.

This is where `Pick` utility type shines brightly, it creates a new type by selecting a specific set of properties from an existing interface

```typescript
type PublicUser = Pick<User, "userName" | "role">;

const displayUser: PublicProfile = {
userName:"Tauhid",
role:"admin"
};
```
