# My Setup

This is a list of how I go about setting up a new computer. I did have a script
and a repo of dotfiles, but I find this difficult to maintain as config etc develops
across several computers. Also the most useful parts are difficult to share in isolation
from other 'moving parts' of the setup.

## Ubuntu

Although I started my career with over 12 flavours of unix, and more recently I've used
CentOS, Arch, Debian... I've settled on Ubuntu for simplicity and for ease of compatibility.

Most of my machines run the latest LTS version.

NOTE: If every owning a chromebook, with [crouton](https://github.com/dnschneid/crouton) 
using [these instructions](https://ubuntu.com/tutorials/install-ubuntu-on-chromebook#1-overview)

### Essential To Start
The following sections does assume you have pulled by dotfiles with:
```
# Bare essentials
sudo apt install -y \
build-essential net-tools nodejs npm vim-athena git 

# Generate a private key

```

### Essential Apps

Okay, you have a fresh install of Ubuntu now to install what I deem the essentials:


```

# Other windowing
sudo apt install -y \
xubuntu-desktop i3 zathura xfce4


# Useful
sudo apt install -y \
ack \
conky-all \
diodon \
figlet \
fzf \
gimp \
imagemagick \
jq \
keepassx \
lolcat \
make \
meld \
nodejs \
npm \
openssh-client \
openssl \
postgresql-client-common  \
postgresql-client \
ranger \
silversearcher-ag \
tcpdump \
tmux \
w3m \
w3m-img \
youtube-dl
```

### Aliases

- Link with `ln -s ${HOME}/dotfiles/diversemix_aliases ~/.bash_aliases`

(If you already have this file you can source `diversemix_aliases`at the end)

### Bash Environment

There are 2 steps:

1) Edit `.bashrc` and add `source ~/dotfiles/diversemix_profile`, you may wish to follow the pattern below 
so that you don't have issues in non-interactive shells.

```
case "$-" in
  *i*) source ~/dotfiles/diversemix_profile ;;
  *)   echo This shell is not interactive ;;
esac

```

### Configure ranger 

PDF previews by uncommenting the `application/pdf`section, after:

```
ranger --copy-config=scope
vim ~/.config/ranger/scope.sh
```

Image previews with
```
pip3 install  ueberzug
set preview_images true >> ~/.config/ranger/rc.conf
set preview_images_method  ueberzug >> ~/.config/ranger/rc.conf
```

### ViM Environment

- Use `ln -s ${HOME}/dotfiles/diversemix.vimrc ~/.vimrc`

### TMux Environment

- Use `ln -s ${HOME}/dotfiles/diversemix.tmux.conf ~/.tmux.conf`

### Git Environment

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global diff.tool meld
git config --global difftool.prompt false
```


### Dropbox

### Using font Source Code Pro
