# [Native] Available commands

# Troubleshooting

<details>
<summary>Only Android is failed to request localhost</summary>
<p>

Use ADB reverse to bind an emulator port to a port on your computer.

```shell
   adb reverse tcp:3000 tcp:3000
```

</p>
</details>

<details>
<summary>The transition movement of post thumbnail is unnatural on native</summary>
<p>

We are using Shared Element Transitions powered by React Native Reanimated.
and It is an experimental feature, not recommended for production use yet.
we're just trying it out

</p>
</details>
