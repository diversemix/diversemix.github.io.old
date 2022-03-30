{:.header}
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
ssh-keygen -t ed25519 -C "your_email@example.com"
cat cat ~/.ssh/id_ed25519.pub
```

Now you can browse to https://github.com/settings/keys and add the key in there.
```
# Clone dotfiles
cd ~
git clone git@github.com:diversemix/dotfiles.git
```

### Essential Apps

Useful apps I like to have installed:
```
# Useful
sudo apt install -y \
ack \
bat \
conky-all \
diodon \
figlet \
firefox \
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

Sometimes I like a different windowing system:
```
sudo apt install -y xubuntu-desktop xfce4
sudo apt install -y i3 zathura
```

### Aliases

- Link with `ln -s ${HOME}/dotfiles/diversemix_aliases ~/.bash_aliases`

(If you already have this file you can source `diversemix_aliases` at the end)

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

Link the rc file with: `ln -s ${HOME}/dotfiles/diversemix.vimrc ~/.vimrc`

Don't forget to now run `:PlugInstall` from within `vim`

* TODO - installing `coc` and `coc-explorer`

### TMux Environment

Link the conf file with: `ln -s ${HOME}/dotfiles/diversemix.tmux.conf ~/.tmux.conf`

### Git Environment

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global diff.tool meld
git config --global difftool.prompt false
```

### Dropbox

Go to the [dropbox install page](https://www.dropbox.com/install) and install from the first
link 
[using the  deb file](https://www.dropbox.com/download?dl=packages/ubuntu/dropbox_2020.03.04_amd64.deb)

### Using font Source Code Pro

Install the patched fonts by cloning repo and running the install:
```
git clone git@github.com:powerline/fonts.git
cd fonts
./install.sh
```

Now go to Terminal -> Preferences and change the font to `Source Code Pro for Powerline`

### Installing bat

```
  mkdir -p ~/.local/bin
  ln -s /usr/bin/batcat ~/.local/bin/bat
```

### Setting up FZF

Documentation can be [found here](https://github.com/junegunn/fzf)

Setup I use in my .bashrc:

```
export FZF_CTRL_T_COMMAND='rg --files --follow --no-ignore-vcs --hidden -g "!{node_modules/*,.git/*,**/*.class}"'
export FZF_CTRL_T_OPTS='--border --info=inline --preview "bat --style=numbers --color=always --line-range :500 {}"  --bind shift-up:preview-page-up,shift-down:preview-page-down'

```
