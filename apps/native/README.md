# Available commands

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
